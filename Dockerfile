FROM mhart/alpine-iojs:2.1.0
WORKDIR /src
COPY . /src
RUN npm install
RUN ls 
