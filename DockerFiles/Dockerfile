FROM postgres
#ENV POSTGRES_PASSWORD docker
#ENV POSTGRES_DB dynamSystems
COPY *.sql /docker-entrypoint-initdb.d/
ADD setup.sql /docker-entrypoint-initdb.d
RUN chmod a+r /docker-entrypoint-initdb.d/*
EXPOSE 6666

# might come in handy
# This should give a shell within the docker container. The Docker container is a specialized environment that in our case is acting as a 
# dummy database. 

# In this shell, run "\copy data FROM '/var/lib/postgresql/data/data.csv' DELIMITER ',' CSV HEADER;" this is going to call upon the docker containers internal file path which we set as a reference to the pgdata folder earlier on, and will allow us to access the .csv data.