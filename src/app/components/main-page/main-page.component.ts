import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoaderService} from '../../services/loader.service';
import {Router} from '@angular/router';
import {xml2js} from 'xml-js';
import {parseToGraph} from '../../utils/parseToGraph';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  fileUploadForm: FormGroup;
  fileName: FormGroup;

  constructor(private fb: FormBuilder, private loaderService: LoaderService, private router: Router) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.fileUploadForm = this.fb.group({
      file: [null, Validators.required],
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.fileName = file.name;
      // parseXMLToObject
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = () => {
        const jsObject = xml2js(reader.result);
        this.fileUploadForm.get('file').setValue(jsObject);
      };
    }
  }

  generateGraph() {
    this.loaderService.displayLoader = true;
    setTimeout(() => {
      // console.log(
      //   this.fileUploadForm.get('file').value,
      //   JSON.stringify(this.fileUploadForm.get('file').value)
      // );
      parseToGraph(this.fileUploadForm.get('file').value);
      this.router.navigate(['/graph']);
      this.loaderService.displayLoader = false;
    }, 2000);
  }
}
