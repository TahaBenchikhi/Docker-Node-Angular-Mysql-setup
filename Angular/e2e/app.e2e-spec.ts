import { AppPage } from './app.po';
import { Authentification } from './auth.po';
describe('CDP App', () => {
  let page: AppPage;
  let auth: Authentification;

  beforeEach(() => {
    page = new AppPage();
    auth = new Authentification();
  });

  it('Test scénario d`authentification avec succes ', () => {
    auth.navigateTo();
    auth.checkauth();
  });

  it('Test scénario d`authentification échoue ', () => {
    auth.navigateTo();
    auth.checkunauth();
  });
});
