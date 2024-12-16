import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function App() {
  return (
    <div>
      <div className='header'>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info mt-2">
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="..."/>
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <div className='row'>
          <div className='col-4'>
            <p>Home</p>
          </div>
          <div className='col-4'>
            <p>Applications</p>
          </div>
          <div className='col-4'>
            <p>Subscription</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</nav>
</div>

<div className='container mt-3'>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
</div>
<div className='row'>
  <div className='col-3'>
  <div class="card bg-info">
  <div class="card-body">
    <h5 class="card-title">Spending</h5>
    <p class="card-text">10M</p>
  </div>
</div>
  </div>
  <div className='col-3'>
  <div class="card bg-danger">
  <div class="card-body">
    <h5 class="card-title">Cost</h5>
    <p class="card-text">10M</p>
  </div>
</div>
  </div>
  <div className='col-3'>
  <div class="card bg-warning">
  <div class="card-body">
    <h5 class="card-title">This Month</h5>
    <p class="card-text">10M</p>
  </div>
</div>
  </div>
  <div className='col-3'>
  <div class="card bg-success">
  <div class="card-body">
    <h5 class="card-title">Next month</h5>
    <p class="card-text">10M</p>
  </div>
</div>
  </div>
</div>
</div>
<div className='container mt-5'>
<div className='row'>
  <div className='col-10'>
    <h2>Applications</h2>
  </div>
  <div className='col-2'>
   <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Application</button>
  </div>
</div>
</div>
<div className='container mt-5'>
<div className='row'>
  <div className='col-10'>
    <input type='text' placeholder='Search inside table'/>
  </div>
  <div className='col-2'>
  <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">PDF</button>
  <button type="button" class="btn btn-primary">Print</button>
  <button type="button" class="btn btn-primary">Download</button>
</div>
  </div>
</div>
</div>
<div className='container'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr> 
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
</div>
<div className='container mt-3'>
<div className='row'>
  <div className='col-10'>
    <h5>Showing 10 out of 100</h5>
  </div>
  <div className='col-2'>
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
    <button type="button" class="btn btn-primary">4</button>
  </div>
</div>
  </div>
</div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className='row'>
          <div className='col-6'>
          <label className='input-label'>Username</label>
          <input className='form-control' type='text' placeholder='Enter username'/>
          </div>
          <div className='col-6'>
          <label className='input-label'>Firstname</label>
          <input className='form-control' type='text' placeholder='Enter firstname'/>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
  );
}

export default App;
