const db = require('../config/db');
class ventas {
  static async getAll() { const [rows] = await db.execute('SELECT * FROM ventas'); return rows; }
  static async getById(id) { const [rows] = await db.execute('SELECT * FROM ventas WHERE id = ?', [id]); return rows[0]; }
  static async create(data) {
    const formattedData = [data.id || null, data.sucursal_id || null, data.empleado_id || null, data.cliente_id || null, data.folio || null, data.fecha_venta || null, data.metodo_pago || null, data.subtotal || null];
    const sql = 'INSERT INTO ventas (id, sucursal_id, empleado_id, cliente_id, folio, fecha_venta, metodo_pago, subtotal) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [result] = await db.execute(sql, formattedData);
    return result;
  }
  static async update(id, data) {
    const formattedData = [data.sucursal_id || null, data.empleado_id || null, data.cliente_id || null, data.folio || null, data.fecha_venta || null, data.metodo_pago || null, data.subtotal || null, id];
    const sql = 'UPDATE ventas SET sucursal_id=?, empleado_id=?, cliente_id=?, folio=?, fecha_venta=?, metodo_pago=?, subtotal=? WHERE id=?';
    await db.execute(sql, formattedData);
  }
  static async delete(id) { await db.execute('DELETE FROM ventas WHERE id = ?', [id]); }
}
module.exports = ventas;