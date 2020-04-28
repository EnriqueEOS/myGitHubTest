exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda and Github! This test worked!'),
        //First Commit From GitHub 
        //Test
    };
    return response;
};
