var dpr,scaleElements,speed;window.$=document.querySelectorAll.bind(document),dpr=window.devicePixelRatio||1,speed=.1,new Zodiac("zodiac",{dotColor:"#3F87E5",linkColor:"#A8DEFF",directionX:0,directionY:0,velocityX:[speed/2,2*speed],velocityY:[speed/2,2*speed],bounceX:!0,bounceY:!0,density:1e4*dpr,dotRadius:[1.5*dpr,1.5*dpr],backgroundColor:"#FAFCFD",linkDistance:50+30*dpr,linkWidth:dpr}),os.android&&($(".ios")[0].style.display="none"),os.ios&&($(".android")[0].style.display="none"),$(".buttons")[0].style.display="block",scaleElements=function(){return $(".container")[0].classList.add("scale"),$(".buttons")[0].classList.add("scale")},os.phone||os.tablet||!(dpr=2)||scaleElements();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5jb2ZmZWUiLCJzY3JpcHQuanMiXSwibmFtZXMiOlsiZHByIiwic2NhbGVFbGVtZW50cyIsInNwZWVkIiwid2luZG93IiwiJCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJpbmQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiWm9kaWFjIiwiZG90Q29sb3IiLCJsaW5rQ29sb3IiLCJkaXJlY3Rpb25YIiwiZGlyZWN0aW9uWSIsInZlbG9jaXR5WCIsInZlbG9jaXR5WSIsImJvdW5jZVgiLCJib3VuY2VZIiwiZGVuc2l0eSIsImRvdFJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImxpbmtEaXN0YW5jZSIsImxpbmtXaWR0aCIsIm9zIiwiYW5kcm9pZCIsInN0eWxlIiwiZGlzcGxheSIsImlvcyIsImNsYXNzTGlzdCIsImFkZCIsInBob25lIiwidGFibGV0Il0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxjQUFBQyxLQUFBQyxRQUFPQyxFQUFJQyxTQUFTQyxpQkFBaUJDLEtBQUtGLFVBSTFDTCxJQUFRRyxPQUFPSyxrQkFBb0IsRUFDbkNOLE1BQVEsR0FFSixHQUFBTyxRQUFPLFVBQ1RDLFNBQVUsVUFDVkMsVUFBVyxVQUNYQyxXQUFZLEVBQ1pDLFdBQVksRUFDWkMsV0FBWVosTUFBUSxFQUFXLEVBQVJBLE9BQ3ZCYSxXQUFZYixNQUFRLEVBQVcsRUFBUkEsT0FDdkJjLFNBQVMsRUFDVEMsU0FBUyxFQUdUQyxRQUFTLElBQVFsQixJQUNqQm1CLFdBQWtCLElBQU5uQixJQUFpQixJQUFOQSxLQUN2Qm9CLGdCQUFpQixVQUNqQkMsYUFBYyxHQUFNLEdBQUtyQixJQUN6QnNCLFVBQVd0QixNQU9WdUIsR0FBR0MsVUFBYXBCLEVBQUUsUUFBUSxHQUFHcUIsTUFBTUMsUUFBVSxRQUM3Q0gsR0FBR0ksTUFBU3ZCLEVBQUUsWUFBWSxHQUFHcUIsTUFBTUMsUUFBVSxRQUNoRHRCLEVBQUUsWUFBWSxHQUFHcUIsTUFBTUMsUUFBVSxRQUVqQ3pCLGNBQWdCLFdDR2QsTURGQUcsR0FBRSxjQUFjLEdBQUd3QixVQUFVQyxJQUFJLFNBQ2pDekIsRUFBRSxZQUFZLEdBQUd3QixVQUFVQyxJQUFJLFVBRTFCTixHQUFHTyxPQUFjUCxHQUFHUSxVQUFXL0IsSUFBTSxJQUUxQ0MiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LiQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpXG5cbiMgLS0tIExPT0sgQU5EIEZFRUwgLS0tXG5cbmRwciAgID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuc3BlZWQgPSAwLjFcblxubmV3IFpvZGlhYyAnem9kaWFjJyxcbiAgZG90Q29sb3I6ICcjM0Y4N0U1J1xuICBsaW5rQ29sb3I6ICcjQThERUZGJ1xuICBkaXJlY3Rpb25YOiAwICAgICAgICAgICAgICAgICAgICAgIyAtMTpsZWZ0OzA6cmFuZG9tOzE6cmlnaHRcbiAgZGlyZWN0aW9uWTogMCAgICAgICAgICAgICAgICAgICAgICMgLTE6dXA7MDpyYW5kb207MTpkb3duXG4gIHZlbG9jaXR5WDogW3NwZWVkIC8gMiwgc3BlZWQgKiAyXSAgICAgICAgICAgICAgICMgW21pblgsbWF4WF1cbiAgdmVsb2NpdHlZOiBbc3BlZWQgLyAyLCBzcGVlZCAqIDJdICAgICAgICAgICAgICAgIyBbbWluWSxtYXhZXVxuICBib3VuY2VYOiB0cnVlICAgICAgICAgICAgICAgICAgICAgIyBib3VuY2UgYXQgbGVmdCBhbmQgcmlnaHQgZWRnZVxuICBib3VuY2VZOiB0cnVlICAgICAgICAgICAgICAgICAgICAgIyBib3VuY2UgYXQgdG9wIGFuZCBib3R0b20gZWRnZVxuICAjIHBhcmFsbGF4OiAuNSAgICAgICAgICAgICAgICAgICAgICMgZmxvYXQgWzAtMS4uLl07IDA6IG5vIHBhcmFsYXhcbiAgIyBwaXZvdDogMSAgICAgICAgICAgICAgICAgICAgICAgICAjIGZsb2F0IFswLTEuLi5dOyBwaXZvdCBsZXZlbCBmb3IgcGFyYWxsYXg7XG4gIGRlbnNpdHk6IDEwMDAwICogZHByICAgICAgICAgICAgICAgICAgICAjIHB4XjIgcGVyIG5vZGVcbiAgZG90UmFkaXVzOiBbZHByICogMS41LCBkcHIgKiAxLjVdICMgcHggdmFsdWUgb3IgW21pblIsbWF4Ul1cbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZBRkNGRCcgICAgICAgICMgZGVmYXVsdCB0cmFuc3BhcmVudDsgdXNlIGFscGhhIHZhbHVlIGZvciBtb3Rpb24gYmx1ciBhbmQgZ2hvc3RpbmdcbiAgbGlua0Rpc3RhbmNlOiA1MCArICgzMCAqIGRwcilcbiAgbGlua1dpZHRoOiBkcHJcblxuXG5cblxuIyAtLS0gUkVTUE9OU0lWRSBMQVlPVVQgLS0tXG5cbmlmIG9zLmFuZHJvaWQgdGhlbiAkKCcuaW9zJylbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG5pZiBvcy5pb3MgdGhlbiAkKCcuYW5kcm9pZCcpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuJCgnLmJ1dHRvbnMnKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG5cbnNjYWxlRWxlbWVudHMgPSAtPlxuICAkKCcuY29udGFpbmVyJylbMF0uY2xhc3NMaXN0LmFkZCgnc2NhbGUnKVxuICAkKCcuYnV0dG9ucycpWzBdLmNsYXNzTGlzdC5hZGQoJ3NjYWxlJylcblxuaWYgbm90IG9zLnBob25lIGFuZCBub3Qgb3MudGFibGV0IGFuZCBkcHIgPSAyXG4gICMgTm9uLVJldGluYSBEZXNrdG9wc1xuICBzY2FsZUVsZW1lbnRzKClcbiIsbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
