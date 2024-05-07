CC = gcc
CFLAGS = -Wall -Werror

all: main

main: main.o utils.o
    $(CC) $(CFLAGS) -o $@ $^

main.o: main.c utils.h
    $(CC) $(CFLAGS) -c $<

utils.o: utils.c utils.h
    $(CC) $(CFLAGS) -c $<

clean:
    rm -f main *.o
