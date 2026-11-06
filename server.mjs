import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {join, extname, resolve} from 'node:path';

const root=resolve(import.meta.dirname);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.woff2':'font/woff2','.ttf':'font/ttf','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'};
const port=Number(process.env.PORT)||4173;
const pages=new Set(['/','/direction-a/','/direction-b/','/direction-c/','/ac-services/','/heating-services/','/indoor-air-quality-services-in-clifton-park/','/ductless-services/','/plumbing-services/','/other-hvac-services-in-clifton-park/','/hvac-promotions-in-clifton-park/','/hvac-blog/','/reviews/','/service-areas/','/contact-us/']);
createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file=resolve(join(root,pages.has(pathname)?'index.html':pathname.replace(/^\//,'')));
    if(!file.startsWith(root)){res.writeHead(403).end();return}
    const info=await stat(file);
    if(!info.isFile())throw new Error('not a file');
    res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(await readFile(file));
  }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}).end('Not found')}
}).listen(port,'127.0.0.1',()=>console.log(`Local URL: http://127.0.0.1:${port}/`));
