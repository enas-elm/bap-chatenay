import { ColumnSpacingIcon } from "@radix-ui/react-icons";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

export const VercelInviteUserEmail = ({
  username,
  invitedByUsername,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Prise de rendez-vous pour ${username} - ${invitedByUsername} vous invite à un rendez-vous personnalisé avec nos conseillers.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal p-0 my-[30px] mx-0">
              Confirmation de traitement de votre formulaire - Opportunité de rendez-vous personnalisé
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Cher/Chère {username}<br /> <br />

              Nous avons le plaisir de vous informer que votre formulaire a été soigneusement traité par notre équipe. Votre dossier a retenu toute notre attention, et nous sommes désormais prêts à passer à l'étape suivante de votre parcours.<br /> <br />

              Pour vous accompagner au mieux dans vos démarches, nous vous proposons de prendre rendez-vous avec l'un de nos conseillers spécialisés. Ce sera l'occasion pour vous d'obtenir des conseils personnalisés et de répondre à toutes vos questions.<br /> <br />

              Merci de cliquer sur le lien suivant pour choisir le créneau qui vous conviendrait le mieux :
              <br /> <br />
              <a href={inviteLink}>{inviteLink}</a>
              <br /> <br />

              Nous vous encourageons à profiter de cette opportunité pour échanger directement avec notre équipe et avancer dans votre projet avec toutes les informations et le soutien dont vous pourriez avoir besoin.<br /> <br />

              Restant à votre disposition pour toute demande d'information complémentaire, nous vous souhaitons une excellente journée. <br /> <br />
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">{username}</span>. This invite was
              sent from <span className="text-black">{inviteFromIp}</span>{" "}
              located in{" "}
              <span className="text-black">{inviteFromLocation}</span>. If you
              were not expecting this invitation, you can ignore this email. If
              you are concerned about your account's safety, please reply to
              this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: "M. Jhon Doe",
  invitedByUsername: "Jane Doe",
  inviteLink: "https://calendly.com/vercel/invite?token=secret",
  inviteFromIp: "Chatenay-Malabry ",
  inviteFromLocation: "Paris, France",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
