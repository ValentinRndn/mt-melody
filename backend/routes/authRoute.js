const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const auth = require('../middleware/auth'); 

// Middleware pour gérer les erreurs async
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Fonction pour générer le JWT
const generateToken = (user) => {
  return jwt.sign(
    {
      user: {
        id: user.id,
        role: user.role,
        name: user.name
      }
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// @route   POST /api/auth/register
// @desc    Inscription d'un utilisateur
// @access  Public
router.post('/register', asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  // Vérification si l'utilisateur existe déjà
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: 'Un compte existe déjà avec cet email'
    });
  }

  // Création de l'utilisateur
  const user = await User.create({
    name,
    email,
    password,
    role: role || 'artist' // Par défaut 'artist' si non spécifié
  });

  if (user) {
    // Mise à jour de la dernière connexion
    user.lastLogin = Date.now();
    await user.save();

    res.status(201).json({
      success: true,
      token: generateToken(user),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture
      }
    });
  }
}));

// @route   POST /api/auth/login
// @desc    Connexion d'un utilisateur
// @access  Public
// routes/authRoute.js
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }

    // Vérifier le mot de passe
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }

    // Créer le payload pour le token
    const payload = {
      user: {
        id: user._id,
        role: user.role
      }
    };

    // Générer le token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { 
      expiresIn: '24h' 
    });

    // Envoyer la réponse
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// @route   GET /api/auth/me
// @desc    Obtenir les informations de l'utilisateur connecté
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    // Vérifier que req.user.id existe
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Utilisateur non authentifié'
      });
    }

    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Utilisateur non trouvé'
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    console.error('Me Route Error:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
});

// Middleware de gestion des erreurs
router.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Erreur serveur',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

module.exports = router;