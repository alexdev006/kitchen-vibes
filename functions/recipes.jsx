exports.handler = async (event, context) => {
    const recipes = [
        { title: 'Pâtes bolognaise', author: ' Jon' },
        { title: 'Pâtes carbo', author: ' Tom' },
        { title: 'Paëlla', author: ' James' },
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(recipes)
        }
    }

    return {
        satusCode: 401,
        body: JSON.stringify({ mssg: 'You have to be logged to see this content' })
    }

}