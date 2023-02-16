module.exports = (sequelize, DataType) => {
    const products = sequelize.define('Product', {
        id: {
            type: DataType.STRING,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        price: {
            type: DataType.DOUBLE,
            allowNull: false
        },
        image: {
            type: DataType.STRING,
            allowNull: false
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        stock: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'products',
        timestamps: false
    })

    return products
}