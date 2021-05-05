import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('Formatação de data 2017-03-31 para 31/03/2017', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2017-03-31')).toEqual('31/03/2017');
  });
});
