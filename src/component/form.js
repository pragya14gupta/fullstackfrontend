import React from 'react';

const Form = () => {
    return(
    <div>
        {/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form> */}


<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <br />
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <br />
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Addr"/>
  </div>
  <br />
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <br />
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>Varanasi</option>
      <option>Mumbai</option>
      <option>Delhi</option>
      <option>Lucknow</option>
    </select>
  </div>
  <br />
 <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Submit
      </label>
    </div>
    <br />
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Log in</button>
  </div>
</form>


    </div>
    )
}

export default Form;