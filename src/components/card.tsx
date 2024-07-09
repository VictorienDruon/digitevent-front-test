import { Circle, HStack, Stack } from "@styled-system/jsx";
import { ArrowDown } from "lucide-react";
import { Heading, Text } from "./ui";

type CardProps = {
	title: string;
	description: string;
};

export const Card = ({ title, description }: CardProps) => {
	return (
		<Stack px="8" py="4" borderWidth="1" borderRadius="xl" boxShadow="xl">
			<HStack justifyContent="space-between">
				<Heading fontWeight="semibold">{title}</Heading>
				<button>
					<Circle size="10" bg="red" borderWidth="1">
						<ArrowDown />
					</Circle>
				</button>
			</HStack>

			<Text>{description}</Text>
		</Stack>
	);
};
