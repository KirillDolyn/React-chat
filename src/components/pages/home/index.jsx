import React from "react";
import DialogItem from "../../dialogItem";
import Message from "../../message";
const Home = () => {
  return (
    <section className="home">
      <DialogItem
        user={{
          fillname: "Андрей Павлович",
          isOnline: true,
        }}
        unriaded={12}
      />
      <DialogItem
        user={{
          fillname: "Андрей Павлович",
          isOnline: true,
        }}
        unriaded={2}
      />
      {/* <Dialogs
        item={[
          {
            user: {
              fillname: "Андрей Павлович",
              avatar: null,
            },
            message: {
              text: "писатель с образованием врача, создал более 300 произведений. В наши дни его пьесы ставят и экранизируют не только в России, но и за рубежом.",
              created_at: new Date(),
            },
          },
        ]}
      /> */}
      {/* <Message
        avatar="https://sun1-26.userapi.com/s/v1/if1/f3yDqSOixn09ckDvA4ea7CSIvO7zGhHBMG5fj02C4MdRIZeHkuvgDEBLDvn1e_I9ioJ5pDsU.jpg?size=100x100&quality=96&crop=0,349,1536,1536&ava=1"
        text="Hello d,r,f,jfjfke emdwszkkfemr"
        date="Mon Feb 07 2022 18:14:57"
        attachments={[
          {
            filemen: "image.jpg",
            url: "https://sun1-20.userapi.com/s/v1/if1/CmpwkkWL3KUZRhlQsnU2zgrM-eUKn0QY5zxMNTzYTvHeaLNKrN-S9JuQQBdAGeoEi9jUUW-e.jpg?size=100x100&quality=96&crop=762,0,1147,1147&ava=1",
          },
          {
            filemen: "image.jpg",
            url: "https://sun1-93.userapi.com/s/v1/ig2/Uk_itoVLNsFjcUro2T-GGweGxWySkXsIlWCVjxptKMRlopeuwKeLTFnoH2_QRJDsI7NNGj-PEN8g2jhk9LOex_vV.jpg?size=100x100&quality=96&crop=57,6,505,505&ava=1",
          },
          {
            filemen: "image.jpg",
            url: "https://sun1-89.userapi.com/s/v1/if2/W9T69v-M49FowQlH3GzutsoI4GWm8w4JW4nf3zXfHXcM6eZLKog8NPZkhioEafrs0RsibYwkSAW5gegVbF5hItjy.jpg?size=100x100&quality=96&crop=125,0,656,656&ava=1",
          },
        ]}
      />
      <Message
        avatar="https://sun1-54.userapi.com/s/v1/ig2/DcxLYezLXOXHF1KyuLa1dbYpZ7qAlP1JYXROO4Gra7EIRHQxLXmHhvPi_85hCDtvh2tA4YSS-IqmpnnItSifxbcn.jpg?size=200x200&quality=95&crop=6,71,587,587&ava=1"
        text="Hello "
        date="Mon Feb 07 2022 20:14:57"
        isMe={true}
      />
      <Message
        avatar="https://sun1-97.userapi.com/s/v1/ig2/yJuWP8gNZuhRq9Q9A6tEZWqeS7HrwarkYQ2gMHr43e5IeUPuhk3Ch7af6GWdHi0W-GyekgrlRETXfBZoHCBuE2em.jpg?size=100x100&quality=96&crop=64,573,951,951&ava=1"
        isTyping
      />
      <Message
        avatar="https://sun1-97.userapi.com/s/v1/ig2/yJuWP8gNZuhRq9Q9A6tEZWqeS7HrwarkYQ2gMHr43e5IeUPuhk3Ch7af6GWdHi0W-GyekgrlRETXfBZoHCBuE2em.jpg?size=100x100&quality=96&crop=64,573,951,951&ava=1"
        attachments={[
          {
            filemen: "image.jpg",
            url: "https://sun1-20.userapi.com/s/v1/if1/CmpwkkWL3KUZRhlQsnU2zgrM-eUKn0QY5zxMNTzYTvHeaLNKrN-S9JuQQBdAGeoEi9jUUW-e.jpg?size=100x100&quality=96&crop=762,0,1147,1147&ava=1",
          },
        ]}
      /> */}
    </section>
  );
};

export default Home;
