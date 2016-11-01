const data = [
  {
    message: 'Welcome to the tour of the Discus argument editor. Press the arrow on the right to continue.',
    interactiveStep: false,
    proving: '',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Let’s walk through how we can make an argument using the diverse amount of logical statements.',
    interactiveStep: false,
    proving: '',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'For this example, we’ll make an argument against going outside when it’s raining.',
    interactiveStep: false,
    proving: '',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'In English, the argument goes as follows: Because you want to be happy, you are not happy when you are wet, and going outside when it’s raining makes you wet, you should not go outside when it’s raining.',
    interactiveStep: false,
    proving: '',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'The first thing that we want to do is mark whether or not we agree with the argument. We’re arguing against it, so let’s mark the thumbs down button. Click the button before we continue.',
    interactiveStep: false,
    proving: '',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Fantastic! Our argument is made up of a number of logical “statements.” Each statement is made up of a number of logical “operators.”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'There are three kinds of statements that can be adjusted with the drop down.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Assume indicates a statement that is taken for granted. It does not have to be provable, and readers can choose to believe of disagree with it.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Fact indicates a statement that is provable. Facts require a source to back up and will be subject to more scrutiny from the moderators.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Givens indicate information that the problem is providing.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Our first statement will be an “assume” statement and reads in English as follows: You should be happy.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Let’s start by adding our first operator. Use the drop down box on the left to select the “should” operator.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Great! Notice that we can now place another operator inside the should operator. This is because operators can be nested.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Use the drop down box to select an “equals” operator.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Awesome! The equals operator can equate two items with each-other. We want to use this to indicate that “you are happy” = True.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'empty',
              },
              {
                type: 'empty'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'In the left operator selector, choose the “variable” operator.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'empty',
              },
              {
                type: 'empty'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'Supreme! Now let’s use the variable’s drop down menu to select the variable “I am happy.”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '0'
              },
              {
                type: 'empty'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'Nice! Variables are where Discus stores logical information. In the full version of discus this would be a search box to search all variables available on Discus and allow you to create new variables.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '0'
              },
              {
                type: 'empty'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'Next let’s compare our variable to the value “true.” Select “value” from the right operator selector.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '0'
              },
              {
                type: 'empty'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'Amazing! The value selector defaults to True, but you could change it to false if you wanted. In the full version of discus this would also allow you to define a set of values or a mathematical representation of a numerical range instead of just Booleans.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '0'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'This statement is done! Add a new statement by clicking the “+” button.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      }
    ]
  },
  {
    message: 'Cool! Let’s now create an assume statement that reads as follows: If you are wet, then you are not happy.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'To do this, select the “if” operator on the new statement.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Super! On the left hand side is a space for your “if” operator and on the right is for the “then” operator. It will read like “if LEFT then RIGHT.”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if : {
            type: 'empty'
          },
          then: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Select an equals operator on for the left, then use that to make the statement “you are wet = True”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Superb! Now on the right of the arrow, select a “not” statement and within that, the variable “you are happy.”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Marvelous! You’ve just completed your second statement, and you’re getting the hang of this.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      }
    ]
  },
  {
    message: 'There are a few things to note here. Firstly, notice that we simply place “you are happy” inside the not operator, instead of inside an equals operator. This is a shorthand. You don’t need an equals statement when comparing something to “True.” In other words “variable” is the same as saying “variable = True.” Similarly “not(variable)” is the same as “variable = false”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      }
    ]
  },
  {
    message: 'Secondly, note that if operators don’t work both ways. Saying “If you are wet, then you are not happy” is different from “if you are not happy, then you are wet.”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      }
    ]
  },
  {
    message: 'Create a new statement.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      }
    ]
  },
  {
    message: 'Wonderful! Now let’s create a statement as follows: If you are outside and it is raining then you are wet.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Start by creating an “if” operator and putting an “and” operator on the left side.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Exquisite! Now fill both sides of that “and” operator in with the variables “you are outside” and “it is raining.” Remember we can use the shorthand here and we don’t need equals.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'empty'
              },
              {
                type: 'empty'
              }
            ]
          },
          then: {
            type: 'empty'
          }
        }
      },
    ]
  },
  {
    message: 'Glorious! Now put the variable “you are wet” in the right side of the if operator.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'empty'
          }
        }
      },
    ]
  },
  {
    message: 'Magnificent! We have one statement left to complete our argument. Press the “+” to add it.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
    ]
  },
  {
    message: 'Outstanding! This time, we’ll use a “given” statement to indicate what the problem is giving us. Set the drop-down to “given.”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Brilliant! Now choose “is” from the list of operators.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'empty'
        }
      }
    ]
  },
  {
    message: 'Splendid! The “is” operator allows us to lock values to variables. This is different from the “equals” operator as the equals operator compares two values.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'is',
          variable: {
            type: 'empty'
          },
          value: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Now, make the statement: “you are outside” is “True”',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'is',
          variable: {
            type: 'empty'
          },
          value: {
            type: 'empty'
          }
        }
      }
    ]
  },
  {
    message: 'Sublime! We’re done and we’ve just proven that we should not go outside when it is raining.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'is',
          variable: {
            type: 'variable',
            id: 3
          },
          value: {
            type: 'value',
            val: true
          }
        }
      }
    ]
  },
  {
    message: 'Just for fun, let’s see what happens when we switch the argument. Click on the thumbs up button now.',
    interactiveStep: false,
    proving: 'disproving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'is',
          variable: {
            type: 'variable',
            id: 3
          },
          value: {
            type: 'value',
            val: true
          }
        }
      }
    ]
  },
  {
    message: 'Good! Now click on the submit button. Notice that a warning is provided saying that you don’t you haven’t properly argued the case.',
    interactiveStep: false,
    proving: 'proving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'is',
          variable: {
            type: 'variable',
            id: 3
          },
          value: {
            type: 'value',
            val: true
          }
        }
      }
    ]
  },
  {
    message: 'Happy Discussing!',
    interactiveStep: false,
    proving: 'proving',
    statements: [
      {
        type: 'assume',
        statement: {
          type: 'should',
          val: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: '1'
              },
              {
                type: 'value',
                val: 'true'
              }
            ]
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'equals',
            vals: [
              {
                type: 'variable',
                id: 2
              },
              {
                type: 'value',
                val: true
              }
            ]
          },
          then: {
            type: 'not',
            val: {
              type: 'variable',
              id: 1
            }
          }
        }
      },
      {
        type: 'assume',
        statement: {
          type: 'if',
          if: {
            type: 'and',
            vals: [
              {
                type: 'variable',
                id: 3
              },
              {
                type: 'variable',
                id: 4
              }
            ]
          },
          then: {
            type: 'variable',
            id: 2
          }
        }
      },
      {
        type: 'given',
        statement: {
          type: 'is',
          variable: {
            type: 'variable',
            id: 3
          },
          value: {
            type: 'value',
            val: true
          }
        }
      }
    ]
  }
]

export default data;
