require('sinatra')
require('sinatra/reloader')
require('./lib/new_post')
also_reload('./**/*.rb')

get('/') do
  erb(:index)
end

get('/blog') do
  erb(:blog)
end

get('/contributors') do
  erb(:contributors)
end

get('/index') do
  erb(:index, :layout => (request.xhr? ? false : :layout))
end

get('/kirk') do
  erb(:kirk, :layout => (request.xhr? ? false : :layout))
end

get('/jerrelle') do
  erb(:jerrelle, :layout => (request.xhr? ? false : :layout))
end

get('/matt') do
  erb(:matt, :layout => (request.xhr? ? false : :layout))
end

get('/never') do
  erb(:never, :layout => (request.xhr? ? false : :layout))
end

get('/matters') do
  erb(:matters, :layout => (request.xhr? ? false : :layout))
end
