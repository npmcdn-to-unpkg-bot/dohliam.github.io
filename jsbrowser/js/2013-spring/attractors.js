var S=768,b=a.getImageData(0,0,S,S),d,e,g,h,j,k,l=0,m=0,n,p,q,r,s,t;c.setAttribute("width",S);c.setAttribute("height",S);setInterval(function(){l+=.001;m+=.002;var u=3*Math.sin(l);n=4*(Math.sin(3+m)+1);r=S/(2*n);t=n*r;for(h=0;h<b.data.length;h+=4)b.data[h]*=.9,b.data[h+1]*=.9,b.data[h+2]*=.9,b.data[h+3]=255;for(var v=100;v--;){h=k=v;j=0;for(g=1e3;g--;)j!=k&&(h=(h-k)/(h+u*j+k),j=(h-k)/(j-k),k=(h-k)/(u*h-j+k),p=h*Math.cos(m)-j*Math.sin(m),q=h*Math.sin(k)+j*Math.cos(m),p<n&&(p>-n&&q<n&&q>-n)&&(d=Math.floor(t-p*r),e=Math.floor(t-q*r),s=4*(S*d+e),b.data[s]+=32,b.data[s+1]+=15,b.data[s+2]+=Math.abs(9*k)))}a.putImageData(b,0,0)},1);