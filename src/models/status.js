const Status = (sequelize, DataTypes) => {
    const schema = {
        status_change_code: DataTypes.STRING,
        current_status: DataTypes.STRING,
        reason: DataTypes.STRING,
        hours_from: DataTypes.INTEGER,
        approver: DataTypes.STRING,
        new_status: DataTypes.STRING,
        hours_to: DataTypes.INTEGER,
        date_effective: DataTypes.DATE,
        date_authorised: DataTypes.DATE,
        new_salary: DataTypes.STRING,
        letter_sent: DataTypes.BOOLEAN
    }
    const status = sequelize.define('status', schema)
    return status
}

module.exports = Status