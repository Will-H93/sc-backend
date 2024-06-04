const Sequelize = require('sequelize')
const StaffModel = require('./staff')
const StatusModel = require('./status')
const TeamModel = require('./team')

const { PGNAME, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env

const setupDatabase = () => {
    const connection = new Sequelize(PGNAME, PGUSER, PGPASSWORD, {
        host: PGHOST,
        port: PGPORT,
        dialect: 'postgres',
        logging: true
    })

    const Staff = StaffModel(connection, Sequelize)
    const Status = StatusModel(connection, Sequelize)
    const Team = TeamModel(connection, Sequelize)

    Staff.belongsTo(Team)
    Team.hasMany(Staff)
    Status.belongsTo(Staff)
    Staff.hasMany(Status)

    connection.sync({ alter: true })
    return {
        Staff,
        Status,
        Team
    }
}

module.exports = setupDatabase()