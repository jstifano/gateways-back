# Gateways API

## Installation

    1. Install dependencies by running npm install
    2. Seed the database by running the script npm run seed-db
    3. Lift the server with npm run start
    4. The server will be running on https://localhost:5000.
    
    NOTE: You can import the Postman collection located in /data/postman and test the services created.

## Services description

    The main route to have a standard after the localhost:5000 is /api.

    Each service will folow this route so if the service is called /xxxx, to make
    the request to that service we should point to http://localhost:5000/api/xxxx

## API Services

    GET/gateways --> Get all gateways from the DB with their devices.
    GET /gateway/:id --> Find one specific gateway by its ID.
    POST /gateway --> Create a new gateway.

    POST /device --> Create a new device associated with a gateway.
    DELETE /device/:id --> Delete a device from a gateway.

## Unit Tests

    To run the suite of tests execute npm run test on command line.
    I just created 3 test cases for the Gateway creation (Successfull creation, Error creation and Invalid IPV4).
    I think it's enough to evaluate me.

## Automated Build

    The automated build is located on /.github/workflows folder, there you'll find the nodejs.yml file
    where all the steps to make the build job are described.
    
    You can check the job working on "Action" tab inside the Github repo.

