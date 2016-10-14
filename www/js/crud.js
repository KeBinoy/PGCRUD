var app = new function() {
  this.el = document.getElementById('lname');
  this.lname = ['Rivera', 'Pude' ];
  this.fname = ['Kevin John', 'Dianne Khate'];
  this.cname = ['BSIT', 'BSCS'];
  this.Count = function(data) {
    
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.lname.length > 0) {
      for (i = 0; i < this.lname.length; i++) {
        data += '<tr>';
        data += '<td>' + this.fname[i] +' ' + this.lname[i] + '</td>';
        data += '<td style="text-align:center;">' + this.cname[i] + '</td>';
        data += '<td style="text-align:center;"><button onclick="app.Edit(' + i + ')"style="border: 0; background: transparent"><img src="img/edit.png" width="25" height="25" alt="submit" /></button>';
        data += '<button onclick="app.Delete(' + i + ')"style="border: 0; background: transparent"><img src="img/delete.png" width="25" height="25" alt="submit" /></button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.lname.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    // el = document.getElementById('add-name');
    el = document.getElementById('add-lastname');
    e2 = document.getElementById('add-firstname');
    e3 = document.getElementById('add-course');
    // Get the value
    // var country = el.value;
    var last = el.value;
    var first = e2.value;
    var crs = e3.value;
    // if (country) {
    if (last) {
      // Add the new value
      // this.countries.push(country.trim());
      this.lname.push(last.trim());
      this.fname.push(first.trim());
      this.cname.push(crs.trim());
      // Reset input value
      el.value = '';
      e2.value = '';
      e3.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    //var el = document.getElementById('edit-name');
    var el = document.getElementById('edit-lastname');
    var e2 = document.getElementById('edit-firstname');
    var e3 = document.getElementById('edit-course');
    // Display value in the field
   // el.value = this.countries[item];
    el.value = this.lname[item];
    e2.value = this.fname[item];
    e3.value = this.cname[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      //var country = el.value;
      var lname = el.value;
      var fname = e2.value;
      var cname = e3.value;
      if (lname) {
        // Edit value
        //self.lname.splice(item, 1, country.trim());
        self.lname.splice(item, 1, lname.trim());
        self.fname.splice(item, 1, fname.trim());
        self.cname.splice(item, 1, cname.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    //this.countries.splice(item, 1);
    this.lname.splice(item, 1);
    this.fname.splice(item, 1);
    this.cname.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
