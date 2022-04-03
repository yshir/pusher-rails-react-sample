.PHONY: environment credentials install seed rubocop test

environment:
	docker-compose build --no-cache
	docker-compose run --rm api bundle install
	docker-compose run --rm api sh -c "RAILS_ENV=development bundle exec rake db:create db:migrate"
	docker-compose run --rm api sh -c "RAILS_ENV=test bundle exec rake db:create db:migrate"
	docker-compose run --rm api rails db:seed

environment/destroy:
	docker-compose down --rmi all --volumes --remove-orphans

environment/rebuild:
	make environment/destroy
	make environment

credentials/edit:
	docker-compose exec api sh -c "EDITOR=vim bin/rails credentials:edit -e $${ENV:-development}"

credentials/show:
	docker-compose exec api sh -c "bin/rails credentials:show -e $${ENV:-development}"

install:
	docker-compose run --rm api sh -c "bundle install"

seed:
	docker-compose run --rm api sh -c "rails db:migrate:reset && rails db:seed"

rubocop:
	docker-compose run --rm api sh -c "bundle exec rubocop -A"

test:
	docker-compose run --rm api sh -c "bundle exec rspec"
