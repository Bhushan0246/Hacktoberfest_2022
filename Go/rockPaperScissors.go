package main

import (
	"fmt"
	"math/rand"
	"strings"
	"time"
)

type choice uint8

func (c choice) String() string {
	return []string{"🈲 Undefined", "👊 Rock", "✋ Paper", "✌ Scissors"}[c]
}

var choices = map[uint8]choice{'R': choiceRock, 'P': choicePaper, 'S': choiceScissors}

const (
	choiceRock choice = iota + 1
	choicePaper
	choiceScissors
)

func main() {
	playRockPaperScissors()
}

func playRockPaperScissors() {
	defer fmt.Println("\n👋 Thank you for playing!")
	for {
		fmt.Print("🔹 Enter your choice (R,P,S) [Q to quit]: ")
		var input string
		_, err := fmt.Scanln(&input)
		if len(input) == 0 {
			return
		}
		if err != nil {
			panic(err)
		}
		r := strings.ToTitle(input)[0]
		switch r {
		case 'R', 'P', 'S':
			playerPlay(choices[r])
		case 'Q':
			return
		default:
			fmt.Println("🚫 error: invalid Choice!")
		}
	}
}

func playerPlay(playerChoice choice) {
	fmt.Printf("🙂 The player have chosen: \t\t%s\n", playerChoice)
	rand.Seed(time.Now().UnixNano())
	computerChoice := choice(rand.Intn(len(choices)) + 1)
	fmt.Printf("🤖 The computer have chosen: \t%s\n", computerChoice)
	if playerChoice == computerChoice {
		fmt.Println("🔷 It's a tie!")
	} else if getOutCome(playerChoice, computerChoice) == true {
		fmt.Println("⭕ Player wins!")
	} else {
		fmt.Println("❌ Computer wins!")
	}
}

func getOutCome(player, computer choice) bool {
	return int(player)-int(computer) == 1 || int(player)-int(computer) == -2
}
