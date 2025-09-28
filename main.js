
document.addEventListener('DOMContentLoaded',()=>{
  if(document.getElementById('products-grid')){
    fetch('data/products.json').then(r=>r.json()).then(products=>{
      const grid=document.getElementById('products-grid');
      grid.innerHTML=products.map(p=>`
        <div class="card product" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">
          <div style="position:relative">
            ${p.sale?'<div class="sale-badge">Sale!</div>':''}
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="content">
            <strong>${p.name}</strong>
            <div><span class="price">PKR ${p.price.toLocaleString()}</span> ${p.old_price?'<span class="old-price">PKR '+p.old_price.toLocaleString()+'</span>':''}</div>
            <a href="product.html#${p.id}" class="btn">Select options</a>
          </div>
        </div>`).join('');
    });
  }
  if(document.getElementById('blog-grid')){
    fetch('data/blog.json').then(r=>r.json()).then(posts=>{
      const grid=document.getElementById('blog-grid');
      grid.innerHTML=posts.map(b=>`
        <div class="blog-card">
          <img src="${b.image}" alt="${b.title}">
          <div class="content">
            <h3>${b.title}</h3>
            <p>${b.excerpt}</p>
            <a href="#">Read more</a>
          </div>
        </div>`).join('');
    });
  }
});
