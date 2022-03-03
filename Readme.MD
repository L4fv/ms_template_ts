# REST API with Node using Typescript

This is a simple REST API developed using node and express with typescript

![alt text](https://image.ibb.co/nAd9OF/logos.png "Node Typescript")

## Folder Structure

```
src
└───index.ts          # Application entry point
└───routes            # Application routes / endpoints
└───controllers       # Express route controllers for all the endpoints of the
└───repositories      # All the database interaction logic is here
└───db                # DB related files like connection / seed data
└───handlers          # Common logic
└───logs              # application logs
└───middlewares       # express middlewares
└───models            # DB Models (Postgress)
└───validators        # API Request object validations

```

# ms_template_ts

# DEPLOY PROD

    COMAND:
     git pull && docker-compose down && docker build . -t ms_template_ts:PROD_1.7  && docker-compose up -d --remove-orphans

# SETUP LOCAL

    npm run dev
