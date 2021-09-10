import { LocationRacePipe } from './location-race.pipe';




describe('LocationRacePipe', () => {



  it('change string location', () => {
    const pipe = new LocationRacePipe();

    var test : string = 'android';
    const res : string = 'A.N.D.R.O.I.D.';
    test = pipe.transform(test);
    expect(test).toEqual(res);

  });
});
