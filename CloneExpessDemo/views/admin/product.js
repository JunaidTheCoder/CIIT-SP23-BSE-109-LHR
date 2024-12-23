<h3><%-pageTitle  %></h3>

<a href="/admin/products/create" class="btn btn-info">Create New Product</a>
<table class="table">
    <thead>
        <tr>
            <th>id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <% for( let index = 0; index < products.length; index++ ) { %>
            <tr>
                <td><%= products[index]._id %></td>
                <td><%= products[index].title %></td>
                <td><%= products[index].price %></td>
                <td><%= products[index].description %></td>
                <td>
                    <a href="/admin/products/edit" class="btn btn-warning">Edit</a>
                    <a href="/admin/products/delete" class="btn btn-danger">Delete</a>
                </td>
            </tr>
        <% } %>
    </tbody>
</table>