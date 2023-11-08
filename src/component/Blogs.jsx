

const Blogs = () => {
    return (
        <div className="bg-gray-200 my-10 p-4 space-y-2">
            <div className="">
                <h2 className="text-xl font-bold">Access Token</h2>
                <p className="">An access token is a short-lived token that is issued to a client  after a user has successfully authenticated. It is used to gain access to protected resources on behalf of the user.</p>
            </div>
            <div>
                <h2 className="text-xl font-bold">Refresh Token</h2>
                <p>A refresh token is a long-lived token issued alongside an access token. Its primary purpose is to obtain a new access token without the need for the user to re-enter their credentials.</p>
            </div>
            <div>
                <h2 className="text-xl font-bold">Storage on the Client-Side</h2>
                <p>Access tokens are typically stored on the client-side, often in memory (e.g., a variable) or in a client-side storage mechanism like a cookie or local storage.
                It's important to store access tokens securely to prevent unauthorized access if the token is stolen.</p>
            </div>
            <div>
                <h2 className="text-xl font-bold">Express.js</h2>
                <p>Express.js is a popular web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and tools for handling HTTP requests and responses, routing, middleware, and more.</p>
            </div>
            <div>
                <h2 className="text-xl font-bold">Nest.js</h2>
                <p>Nest.js is a framework for building scalable and efficient server-side applications. It is built with TypeScript and is often used for building Node.js applications, including APIs and microservices. Nest.js provides a modular and organized approach to application development, making it easier to manage complex codebases.</p>
            </div>
        </div>
    );
};

export default Blogs;