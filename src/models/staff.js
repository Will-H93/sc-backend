const Staff = (sequelize, DataTypes) => {
    const schema = {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN
    }
    const staff = sequelize.define('staff', schema)
    return staff
}

module.exports = Staff