
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 6
My Partner's Key:8 

Our initial shared key: 14

## Part 2: Messaging

| Encoded Message                                                      | Decoded Message                                                       | Key |
| -------------------------------------------------------------------- | --------------------------------------------------------------------- | --- |
| vszzc w oa xoasg dsffm                                               | hello i am james perry                                                |  14 |
| pmtt ug vium qa ivoca                                                | hell my name is angus                                                 |  23 |
| G lccb dgtc fslbpcb bmjjypq dmp yl gltcqrkclr gl Kcvgayl rgkc qfypcq.| I need five hundred dollars for an investment in Mexican time shares. |  24 |
| uibdt dppm                                                           | thacs cool                                                            |   1 |

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

first six characters from encoded message:
MTUQPG 

Converted to binary: 
01001101 01010100 01010101 01010001 01010000 01000111

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: James 
    Destination: Angus  
    Sequence: 1/3
    Data: 01001101 01010100
    =========
    Packet 2:

    Source: James
    Destination: Angus
    Sequence: 2/3 
    Data: 01010101 01010001
    =========
    Packet 3:

    Source: James
    Destination: Angus
    Sequence: 3/3
    Data: 01010000 01000111
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

Asymmetric encryption uses a public key to encrypt and a separate, private key to decrypt, while symmetric encryption uses a single, shared key for both encryption and decryption. In this example we used Asymmetric for the first message (generation of a shared secret key) and symmetric after, useing the shared secret key.

- Why is it important that this protocol uses a new key for each message?

In the case that one key is cracked it will not compromise the whole message chain.

- Why is it important that you never share your secret key? 

It could give anyone the ability to access the unencrypted messages.

- In the transport layer, do these messages use TCP or UDP? Why?

TCP, less info traveling means the extra transport time is barely noticeable and having all the packets is important. 

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?

it can be seen who the messages were sent to, how long the messages where, when they were sent, and how many were sent
