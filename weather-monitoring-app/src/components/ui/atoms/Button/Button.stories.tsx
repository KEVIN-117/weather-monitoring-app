import type { Meta, StoryObj } from '@storybook/react';
import { Button } from ".";

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
}

export default meta;

type Story = StoryObj<typeof Button>;

// <Button variant="light" color="default">Default</Button>
export const Default: Story = {
    args: {
        variant: "light",
        color: "default",
        children: "Default"
    }
}

//<Button variant="solid" color="primary">Primary</Button>
export const Primary: Story = {
    args: {
        variant: "solid",
        color: "primary",
        children: "Primary"
    }
}

//<Button variant="bordered" color="secondary">Secondary</Button>
export const Secondary: Story = {
    args: {
        variant: "bordered",
        color: "secondary",
        children: "Secondary"
    }
}
//<Button variant="flat" color="success">Success</Button>
export const Success: Story = {
    args: {
        variant: "flat",
        color: "success",
        children: "Success"
    }
}
//<Button variant="faded" color="warning">Warning</Button>
export const Warning: Story = {
    args: {
        variant: "faded",
        color: "warning",
        children: "Warning"
    }
}
//<Button variant="shadow" color="danger">Danger</Button>
export const Danger: Story = {
    args: {
        variant: "shadow",
        color: "danger",
        children: "Danger"
    }
}
//<Button variant="ghost">Ghost</Button>
export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost"
    }
}
//<Button variant="light" color="primary" >Light</Button>
export const Light: Story = {
    args: {
        variant: "light",
        color: "primary",
        children: "Light"
    }
}

/*<Button Button
    type = "submit"
    color = "default"
    size = "lg"
    variant = "solid"
    fullWidth
    radius = "full"
    loading
    icon = {< MoonIcon />}
    className = "text-2xl first-letter:uppercase"
    href = "https://nextjs.org"
    target = "_blank"
    rel = "noopener noreferrer"
    >
        Default
</Button>*/
export const DefaultLoading: Story = {
    args: {
        type: "submit",
        color: "default",
        size: "lg",
        variant: "solid",
        fullWidth: true,
        radius: "full",
        loading: true,
        icon: "MoonIcon",
        className: "text-2xl first-letter:uppercase",
        href: "https://nextjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Default"
    }
}
/*<Button
    type = "submit"
    color = "primary"
    size = "md"
    variant = "light"
    fullWidth
    radius = "lg"
    loading
    icon = {< SunIcon />}
    className = "text-xl"
    href = "https://nextjs.org"
    target = "_blank"
    rel = "noopener noreferrer"
    >
    Primary
    </Button>*/
export const PrimaryLoading: Story = {
    args: {
        type: "submit",
        color: "primary",
        size: "md",
        variant: "light",
        fullWidth: true,
        radius: "lg",
        loading: true,
        icon: "SunIcon",
        className: "text-xl",
        href: "https://nextjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Primary"
    }
}
/*< Button
    type = "submit"
    color = "primary"
    size = "md"
    variant = "light"
    fullWidth
    radius = "lg"
    loading = { false}
    icon = {< SunIcon />}
    className = "text-2xl"
    style = {{ color: "red" }}
    href = "https://nextjs.org"
    target = "_blank"
    rel = "noopener noreferrer"
    />*/
export const PrimaryNotLoading: Story = {
    args: {
        type: "submit",
        color: "primary",
        size: "md",
        variant: "light",
        fullWidth: true,
        radius: "lg",
        loading: false,
        icon: "SunIcon",
        className: "text-2xl",
        style: { color: "red" },
        href: "https://nextjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
    }
}

//<Button size="sm" color="default" type="submit">Default</Button>
export const DefaultSmall: Story = {
    args: {
        size: "sm",
        color: "default",
        type: "submit",
        children: "Default"
    }
}
//<Button size="md" color="primary" type="submit">Primary</Button>
export const PrimaryMedium: Story = {
    args: {
        size: "md",
        color: "primary",
        type: "submit",
        children: "Primary"
    }
}
//<Button size="lg" color="secondary" type="submit">Secondary</Button>
export const SecondaryLarge: Story = {
    args: {
        size: "lg",
        color: "secondary",
        type: "submit",
        children: "Secondary"
    }
}