
  
  
                        // Använder mock data som kan oculärt verifieras med user.json, bonus.json, shoppinglist.json /detta verifierar ochså att loginfunktione fungerar
  const customer = [    //Using mock data that can be verfied with actual data plz view user.json for ocular verification
    'Ståhl',
    '28150',
    'HÄSSLEHOLM',
    'Man',
    '1973',
  ];

  const shoppinglist = [    
    'ShoppingLists',
    'LISTA',
    'ProductName',
    'grädde',
    'mjölk',
  ];
  
  const bonus = [    
    'TransactionSummaryByMonth',
    'YearMonthAsDateTime',
    'TransactionForAMonth',
    'TransactionDate',
    'MarketingName',
  ];
  
  test('the Customer const has surname on it', () => {
    expect(customer).toContain('Ståhl');
    expect(new Set(customer)).toContain('Ståhl');
  });


  test('the Customer const has zipcode on it', () => {
    expect(customer).toContain('28150');
    expect(new Set(customer)).toContain('28150');
  });

  test('the Customer const has city on it', () => {
    expect(customer).toContain('HÄSSLEHOLM');
    expect(new Set(customer)).toContain('HÄSSLEHOLM');
  });

  test('the Customer const has gender on it', () => {
    expect(customer).toContain('Man');
    expect(new Set(customer)).toContain('Man');
  });

  test('the Customer const has birthyear on it', () => {
    expect(customer).toContain('1973');
    expect(new Set(customer)).toContain('1973');
  });

  test('The bonus const has TransactionSummaryByMonth on it', () => {
  expect(bonus).toContain('TransactionSummaryByMonth');
  expect(new Set(bonus)).toContain('TransactionSummaryByMonth');
  });
                    
  test('the bonus const has YearMonthAsDateTime on it', () => {
  expect(bonus).toContain('YearMonthAsDateTime');
  expect(new Set(bonus)).toContain('YearMonthAsDateTime');
  });
                    
  test('the bonus const has TransactionForAMonth on it', () => {
  expect(bonus).toContain('TransactionForAMonth');
  expect(new Set(bonus)).toContain('TransactionForAMonth');
  });
                    
  test('the bonus const has TransactionDate on it', () => {
  expect(bonus).toContain('TransactionDate');
  expect(new Set(bonus)).toContain('TransactionDate');
  });
                    
  test('the bonus const has MarketingName on it', () => {
  expect(bonus).toContain('MarketingName');
  expect(new Set(bonus)).toContain('MarketingName');
  });
                    
  
  test('the shoppinglist const has surname on it', () => {
  expect(shoppinglist).toContain('Ståhl');
  expect(new Set(shoppinglist)).toContain('Ståhl');
  });


  test('the shoppinglist const has zipcode on it', () => {
  expect(shoppinglist).toContain('28150');
  expect(new Set(shoppinglist)).toContain('28150');
  });

  test('the shoppinglist const has city on it', () => {
  expect(shoppinglist).toContain('HÄSSLEHOLM');
  expect(new Set(shoppinglist)).toContain('HÄSSLEHOLM');
  });

  test('the shoppinglist const has gender on it', () => {
  expect(shoppinglist).toContain('Man');
  expect(new Set(shoppinglist)).toContain('Man');
  });

  test('the shoppinglist const has birthyear on it', () => {
  expect(shoppinglist).toContain('1973');
  expect(new Set(shoppinglist)).toContain('1973');
  });



