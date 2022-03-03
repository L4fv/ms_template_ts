# ms_template_ts

# DEPLOY PROD

    COMAND:
     git pull && docker-compose down && docker build . -t ms_template_ts:PROD_1.2  && docker-compose up -d --remove-orphans

# SETUP LOCAL

    npm run dev
