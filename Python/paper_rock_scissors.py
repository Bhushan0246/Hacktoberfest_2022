import random

print("Paper, Rock, Scissors!")

choices = ['P', 'R', 'S']
while True:
    playerChoice = input("Your turn! Please choose [P]aper, [R]ock, [S]cissors, or [Q]uit: ")
    playerChoice = playerChoice.upper()

    if playerChoice == "Q":
        print("Thank you, Have a nice day!")
        break
    if playerChoice not in choices:
        print("Please choose a letter P, R or S!")
        continue

    computerChoice = random.choice(choices)

    print("Your choice is: " + playerChoice)
    print("Computer choice is: "+ computerChoice)

    if playerChoice == computerChoice:
        print("Result: Same choice, Draw!")
    elif playerChoice == "P" and computerChoice == "R" \
            or playerChoice == "R" and computerChoice == "S" \
            or playerChoice == "S" and computerChoice == "P":
        print("Result: You Win!")
    else:
        print("Result: You Lost!")
