import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  // #region authToken
  static _authToken = '';
  get authToken() {
    return AuthService._authToken;
  }
  set authToken(value) {
    AuthService._authToken = value;
  }
  // #endregion
}
