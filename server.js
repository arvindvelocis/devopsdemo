const port = process.env.PORT || 80
require('http')
  .createServer((req, res) => {
    console.log(`incoming url: ${req.url} and incoming method: ${req.method}`)
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.write('<h1>Welcome to Knowledge Management Session on DevOps</h1>')
    res.write('<h2>AWS Code Pipeline</h2>')
    res.end('<h3>Velocis DevOps Team</h3>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
