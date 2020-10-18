import random

print("Papaer, Rock, Scissors!")

# Define choice
choices = ['P', 'R', 'S']
while True:
    playerChoice = raw_input("Your turn! [P]aper, [R]ock, [S]cissors, [Q]uit : ")
    # convert input to uppercase
    playerChoice = playerChoice.upper()
    if playerChoice == "Q":
        print("Thank you, Have a nice day!")
        break
    if playerChoice not in(choices):
        print("Please choose P, R or S letter!")
        continue
    computerChoice = random.choice(choices)
    print("Your choice is: " +playerChoice)
    print("Computer choice is: "+ computerChoice)
    if playerChoice == computerChoice:
        print("Result: Same choice Draw!")
        continue
    elif playerChoice == "P" and computerChoice == "R":
        print("Result: You Win!")
        continue
    elif playerChoice == "R" and computerChoice == "S":
        print("Result: You Win!")
        continue
    elif playerChoice == "S" and computerChoice == "P":
        print("Result: You Win!")
        continue
    else:
        print("Result: You Lose!")
        continue
