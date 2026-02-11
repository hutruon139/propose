express = require 'express'
path = require 'path'
app = express()

# Build the correct path to the dist folder
distPath = path.join(__dirname, '/../site/dist')

# Serve static files from dist
app.use express.static distPath

app.all '/*', (req, res, next) ->
	res.header "Access-Control-Allow-Origin", "*"
	res.header "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
	next()

app.get '/ping', (req, res) ->
	res.status(200).send
		'message': 'pong'

app.get '/', (req, res) ->
	res.sendFile path.join(distPath, 'index.html')

app.get '/favicon.ico', (req, res) ->
	res.sendFile path.join(distPath, 'images/favicon.ico')

app.get '/*', (req, res) ->
	res.sendFile path.join(distPath, 'index.html')

# Only listen in local development
if process.env.NODE_ENV isnt 'production'
	port = process.env.PORT or 5000
	app.listen port, () -> console.log "Server listening on port \"#{port}\""

module.exports = app
