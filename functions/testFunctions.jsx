exports.handler = async () => {

    console.log('function ran')

    const data = { name: 'Alex', age: 41, job: 'dev' }

    //return response to browser
    return {
        status: 200,
        body: JSON.stringify(data)
    }

}