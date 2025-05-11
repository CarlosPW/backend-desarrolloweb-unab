import Report from "../models/Report.js";

export const getReports = async (_, res) => {
  try {
    const reports = await Report.find();

    if (!reports || reports.length === 0) {
      return res.status(404).json({
        success: false,
        error: "No existen reportes.",
      });
    }

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al obtener los reportes.",
    });
  }
};

export const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        error: "No existe usuario.",
      });
    }

    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al obtener el reporte.",
    });
  }
};

export const createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);

    res.status(201).json({
      success: true,
      data: report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al crear reporte.",
    });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const report = await Report.deleteOne({ $where: req.params.id });

    if (!report) {
      return res.status(404).json({
        success: false,
        error: "No existe reporte.",
      });
    }

    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al desactivar reporte.",
    });
  }
};
