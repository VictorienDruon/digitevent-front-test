import { Circle, HStack, Stack } from "@styled-system/jsx";
import { ArrowDown } from "lucide-react";
import { Heading, Text } from "./ui";

type CardProps = {
	title: string;
	description: string;
	onRefresh?: () => void;
};

export const Card = ({ title, description, onRefresh }: CardProps) => {
	return (
		<Stack
			h="1/2"
			p="8"
			gap="8"
			bg="white"
			borderWidth="1"
			borderRadius="xl"
			boxShadow="xl"
		>
			<HStack justifyContent="space-between">
				<Heading fontWeight="semibold" textDecoration="underline">
					{title}
				</Heading>
				<button onClick={onRefresh}>
					<Circle size="10" bg="red" borderWidth="1">
						<ArrowDown />
					</Circle>
				</button>
			</HStack>

			<Text>{description}</Text>
		</Stack>
	);
};
