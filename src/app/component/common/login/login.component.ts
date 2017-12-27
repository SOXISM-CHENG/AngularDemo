import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'soxism-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentChecked {
  loginForm: FormGroup;
  err;
  loginLoad = false;
  isVisible = false;
  isConfirmLoading = false;
  logoicon: any;
  typeList = [
    {
      id: 1,
      name: '学员',
      icon: 'xueyuan',
      url: '/home'
    },
    {
      id: 2,
      name: '讲师',
      icon: 'huiyijiangshi',
      url: '/person/assistant/lessons'
    },
    {
      id: 3,
      name: '管理员',
      icon: 'guanlizhe',
      url: '/console/index.html'
    }
  ];
  activeIndex = 0;

  _submitForm(event, value) {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
    }

    if (this.loginForm.valid) {
      this.doLogin(value);
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _message: NzMessageService,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

  }
  ngAfterContentChecked() {
  }

  doLogin(value) {
    this.loginLoad = true;
    // this.authService.login(value).subscribe(
    //   ok => {
    //     // this.isVisible = true;
    //     setTimeout(() => {
    //       this.loginLoad = false;
    //       this.router.navigate(['/home']);
    //     }, 1000)
    //   },
    //   err => {
    //     this.err = err;
    //     this._message.create('error', err);
    //     this.loginLoad = false;
    //   }
    // );
  };
  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      location.href = location.origin + this.typeList[this.activeIndex].url;
    }, 1000);
  }
  keupFn(e) {
    if (e.keyCode == 13) {
      this.handleOk(e);
    }
  }

  // handleCancel = (e) => {
  //   this.isVisible = false;
  // }
  typeActive = (index) => {
    this.activeIndex = index;
  }

}
