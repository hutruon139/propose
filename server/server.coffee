express = require 'express'
path = require 'path'
fs = require 'fs'
app = express()

# Build the correct path to the dist folder
distPath = path.join(__dirname, '..', 'site', 'dist')

# Middleware to serve static files
app.use express.static distPath

# CORS headers
app.all '/*', (req, res, next) ->
	res.header "Access-Control-Allow-Origin", "*"
	res.header "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
	next()

# Ping endpoint
app.get '/ping', (req, res) ->
	res.status(200).json message: 'pong'

# SPA fallback - serve index.html for all other routes
app.get '*', (req, res) ->
	indexPath = path.join(distPath, 'index.html')
	if fs.existsSync(indexPath)
		res.sendFile indexPath
	else
		res.status(404).send 'Not found'

# Only listen in local development
unless process.env.NODE_ENV is 'production'
	port = process.env.PORT or 5000
	server = app.listen port, () -> console.log "Server listening on port #{port}"
	process.on 'SIGTERM', () ->
		console.log 'SIGTERM signal received: closing HTTP server'
		server.close () ->
			console.log 'HTTP server closed'

module.exports = app
