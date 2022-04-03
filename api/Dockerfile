FROM ruby:3.1.1-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  libpq-dev \
  postgresql-client \
  git \
  # add
  vim \
  default-libmysqlclient-dev \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN gem update --system

RUN gem install bundler:2.3.8

WORKDIR /usr/src/app

COPY Gemfile .

COPY Gemfile.lock .

RUN bundle install
