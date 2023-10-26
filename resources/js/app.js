import './bootstrap';
import app from './main.js';

app.mount(".wrapper");

$(document).ready(function () {
  $('.select2').select2({
    dropdownParent: $('#create-modal, #edit-modal .modal-body'),
    theme: 'bootstrap4',
    width: '100%'
  });
});