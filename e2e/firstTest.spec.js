describe('HomeScreen', () => {
  const goalListID = 'GoalList';
  const targetScreenID = 'Target';
  const homeScreenID = 'Home';
  const tileID = 'Tile_';
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should render screen with id Home', async () => {
    await expect(element(by.id(homeScreenID))).toBeVisible();
  });
  it('should have GoalList screen', async () => {
    await expect(element(by.id(goalListID))).toBeVisible();
  });
  it('should have 17 Tiles rendered inside the GoalList', async () => {
    await expect(element(by.id(goalListID).withDescendant(by.id(`${tileID}17`)))).toBeVisible();
    await expect(element(by.id(goalListID).withDescendant(by.id(`${tileID}18`)))).toBeNotVisible();
  });

  // @TODO figure out why tap() does not work
  xit('should navigate to TargetScreen after clicking on tile 13', async () => {
    const tile13 = element(by.id(goalListID).withDescendant(by.id(`${tileID}13`)));
    await expect(tile13).toBeVisible();
    await tile13.tap();
    await expect(element(by.id("button"))).toExist();
    // await waitFor(element(by.id(targetScreenID)).atIndex(1)).toBeVisible().withTimeout(2000);
    // await waitFor(element(by.id(targetScreenID))).toBeVisible().withTimeout(2000);
  });

});
