const Team = (sequelize, DataTypes) => {
    const schema = {
        team_name: DataTypes.STRING
    }
    const team = sequelize.define('team', schema)
    return team
}

module.exports = Team