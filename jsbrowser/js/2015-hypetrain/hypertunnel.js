for(var b=a.height,c=a.width,d=[],e=[],k=a.getContext("2d"),l=k.getImageData(0,0,c,b),m=Math,n=2*m.PI,p,q=0;q<b;q++){d[q]=[];e[q]=[];for(var r=0;r<c;r++){var t=r-c/2,u=b/2-q;p=m.atan(t/(u|1));p=p/n+180;d[q][r]=1024*p|0;e[q][r]=4388608/(t*t+u*u)}}function v(f,g,h){h=.5*(1-m.cos(3.14*h));return f*(1-h)+g*h}for(var x=[],y=[],z=0;128>z;z++){y[z]=[];for(var A=0;128>A;A++)y[z][A]=2*m.random()-1}
for(z=0;128>=z;z++)for(x[z]=[],A=0;128>=A;A++){var B;if(64>=z){var C;if(64>A){for(var D=0,E=0;5>=E;E++)var F=m.pow(2,E),G=.05*z*F,H=.05*A*F,I=m.floor(G),J=G-I,K=m.floor(H),D=D+v(v(y[I%128][K%128]/4,y[(I+1)%128][K%128]/4,J),v(y[I%128][(K+1)%128]/4,y[(I+1)%128][(K+1)%128]/4,J),H-K)*m.pow(.25,E);C=D}else C=x[z][128-A-1];B=C}else B=x[128-z][A];x[z][A]=B}var L=0,M=0,N=0;
function O(){for(var f=0;f<b;f++)for(var g=0;g<c;g++){var h=e[f][g],P=486-h|0,w=f*c*4+4*g;l.data[w+0]=l.data[w+1]=l.data[w+2]=355*x[(h+L)%128|0][(d[f][g]+M)%128];l.data[w+3]=P}k.putImageData(l,0,0);L+=2;M+=4*m.sin(N)|0;N+=.01;requestAnimationFrame(O,a)}O();