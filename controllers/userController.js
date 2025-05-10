import User from "../models/User.js";

// @desc Obtener todos los usuarios.
// @route GET /api/users.
// @access Private/Admin.
export const getUsers = async (_, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        error: "No existen usuarios.",
      });
    }

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al obtener los usuarios.",
    });
  }
};

// @desc Obten un usuario por su id.
// @route GET /api/users/:id.
// @access Private/Admin.
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No existe usuario.",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al obtener el usuario.",
    });
  }
};

// @desc Crear usuario.
// @route POST /api/users.
// @access Private/Admin.
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al crear usuario.",
    });
  }
};

// @desc Actualizar usuario.
// @route PUT /api/users/:id.
// @access Private/Admin.
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No existe usuario.",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al actualizar usuario.",
    });
  }
};

// @desc Desactivar usuario.
// @route DELETE /api/users/:id.
// @access Private/Admin.
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { activo: false }, { new: true });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No existe usuario.",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al desactivar usuario.",
    });
  }
};
